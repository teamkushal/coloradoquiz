import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent905Component } from './test-component905.component';

describe('TestComponent905Component', () => {
  let component: TestComponent905Component;
  let fixture: ComponentFixture<TestComponent905Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent905Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
