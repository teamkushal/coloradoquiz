import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent152Component } from './test-component152.component';

describe('TestComponent152Component', () => {
  let component: TestComponent152Component;
  let fixture: ComponentFixture<TestComponent152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
