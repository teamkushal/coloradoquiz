import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent207Component } from './test-component207.component';

describe('TestComponent207Component', () => {
  let component: TestComponent207Component;
  let fixture: ComponentFixture<TestComponent207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
