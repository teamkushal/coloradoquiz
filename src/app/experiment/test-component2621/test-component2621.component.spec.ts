import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2621Component } from './test-component2621.component';

describe('TestComponent2621Component', () => {
  let component: TestComponent2621Component;
  let fixture: ComponentFixture<TestComponent2621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2621Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
