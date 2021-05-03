import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2427Component } from './test-component2427.component';

describe('TestComponent2427Component', () => {
  let component: TestComponent2427Component;
  let fixture: ComponentFixture<TestComponent2427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
