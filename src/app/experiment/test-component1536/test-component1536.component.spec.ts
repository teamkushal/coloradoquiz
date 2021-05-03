import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1536Component } from './test-component1536.component';

describe('TestComponent1536Component', () => {
  let component: TestComponent1536Component;
  let fixture: ComponentFixture<TestComponent1536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1536Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
