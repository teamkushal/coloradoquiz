import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2518Component } from './test-component2518.component';

describe('TestComponent2518Component', () => {
  let component: TestComponent2518Component;
  let fixture: ComponentFixture<TestComponent2518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2518Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
