import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2260Component } from './test-component2260.component';

describe('TestComponent2260Component', () => {
  let component: TestComponent2260Component;
  let fixture: ComponentFixture<TestComponent2260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
