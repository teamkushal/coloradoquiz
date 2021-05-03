import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent870Component } from './test-component870.component';

describe('TestComponent870Component', () => {
  let component: TestComponent870Component;
  let fixture: ComponentFixture<TestComponent870Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent870Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
