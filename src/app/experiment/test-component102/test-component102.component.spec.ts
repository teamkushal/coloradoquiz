import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent102Component } from './test-component102.component';

describe('TestComponent102Component', () => {
  let component: TestComponent102Component;
  let fixture: ComponentFixture<TestComponent102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
