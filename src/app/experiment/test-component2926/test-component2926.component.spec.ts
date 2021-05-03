import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2926Component } from './test-component2926.component';

describe('TestComponent2926Component', () => {
  let component: TestComponent2926Component;
  let fixture: ComponentFixture<TestComponent2926Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2926Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
