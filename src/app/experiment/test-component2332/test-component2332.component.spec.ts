import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2332Component } from './test-component2332.component';

describe('TestComponent2332Component', () => {
  let component: TestComponent2332Component;
  let fixture: ComponentFixture<TestComponent2332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
