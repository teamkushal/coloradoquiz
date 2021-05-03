import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent245Component } from './test-component245.component';

describe('TestComponent245Component', () => {
  let component: TestComponent245Component;
  let fixture: ComponentFixture<TestComponent245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
