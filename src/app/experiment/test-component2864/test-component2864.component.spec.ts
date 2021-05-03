import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2864Component } from './test-component2864.component';

describe('TestComponent2864Component', () => {
  let component: TestComponent2864Component;
  let fixture: ComponentFixture<TestComponent2864Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2864Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
