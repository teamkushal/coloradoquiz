import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2090Component } from './test-component2090.component';

describe('TestComponent2090Component', () => {
  let component: TestComponent2090Component;
  let fixture: ComponentFixture<TestComponent2090Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2090Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
