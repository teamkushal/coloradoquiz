import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent389Component } from './test-component389.component';

describe('TestComponent389Component', () => {
  let component: TestComponent389Component;
  let fixture: ComponentFixture<TestComponent389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
