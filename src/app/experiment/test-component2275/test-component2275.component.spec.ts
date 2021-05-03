import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2275Component } from './test-component2275.component';

describe('TestComponent2275Component', () => {
  let component: TestComponent2275Component;
  let fixture: ComponentFixture<TestComponent2275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
