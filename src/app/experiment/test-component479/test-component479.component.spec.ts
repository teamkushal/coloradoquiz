import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent479Component } from './test-component479.component';

describe('TestComponent479Component', () => {
  let component: TestComponent479Component;
  let fixture: ComponentFixture<TestComponent479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent479Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
