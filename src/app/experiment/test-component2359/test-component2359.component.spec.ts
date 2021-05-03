import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2359Component } from './test-component2359.component';

describe('TestComponent2359Component', () => {
  let component: TestComponent2359Component;
  let fixture: ComponentFixture<TestComponent2359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
