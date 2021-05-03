import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2698Component } from './test-component2698.component';

describe('TestComponent2698Component', () => {
  let component: TestComponent2698Component;
  let fixture: ComponentFixture<TestComponent2698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2698Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
