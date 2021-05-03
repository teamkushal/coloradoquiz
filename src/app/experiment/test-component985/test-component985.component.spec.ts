import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent985Component } from './test-component985.component';

describe('TestComponent985Component', () => {
  let component: TestComponent985Component;
  let fixture: ComponentFixture<TestComponent985Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent985Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
