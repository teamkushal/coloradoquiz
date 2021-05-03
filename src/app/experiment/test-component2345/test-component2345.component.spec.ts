import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2345Component } from './test-component2345.component';

describe('TestComponent2345Component', () => {
  let component: TestComponent2345Component;
  let fixture: ComponentFixture<TestComponent2345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2345Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
