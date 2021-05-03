import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2087Component } from './test-component2087.component';

describe('TestComponent2087Component', () => {
  let component: TestComponent2087Component;
  let fixture: ComponentFixture<TestComponent2087Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2087Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
