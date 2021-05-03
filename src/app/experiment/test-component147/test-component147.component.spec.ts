import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent147Component } from './test-component147.component';

describe('TestComponent147Component', () => {
  let component: TestComponent147Component;
  let fixture: ComponentFixture<TestComponent147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
