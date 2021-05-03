import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent860Component } from './test-component860.component';

describe('TestComponent860Component', () => {
  let component: TestComponent860Component;
  let fixture: ComponentFixture<TestComponent860Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent860Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
