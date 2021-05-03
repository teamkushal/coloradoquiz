import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2514Component } from './test-component2514.component';

describe('TestComponent2514Component', () => {
  let component: TestComponent2514Component;
  let fixture: ComponentFixture<TestComponent2514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2514Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
