import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1999Component } from './test-component1999.component';

describe('TestComponent1999Component', () => {
  let component: TestComponent1999Component;
  let fixture: ComponentFixture<TestComponent1999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
