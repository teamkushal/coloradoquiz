import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent619Component } from './test-component619.component';

describe('TestComponent619Component', () => {
  let component: TestComponent619Component;
  let fixture: ComponentFixture<TestComponent619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent619Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
