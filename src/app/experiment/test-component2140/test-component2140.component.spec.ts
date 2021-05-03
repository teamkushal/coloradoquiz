import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2140Component } from './test-component2140.component';

describe('TestComponent2140Component', () => {
  let component: TestComponent2140Component;
  let fixture: ComponentFixture<TestComponent2140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
