import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2148Component } from './test-component2148.component';

describe('TestComponent2148Component', () => {
  let component: TestComponent2148Component;
  let fixture: ComponentFixture<TestComponent2148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
