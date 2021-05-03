import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent773Component } from './test-component773.component';

describe('TestComponent773Component', () => {
  let component: TestComponent773Component;
  let fixture: ComponentFixture<TestComponent773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent773Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
