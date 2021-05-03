import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent634Component } from './test-component634.component';

describe('TestComponent634Component', () => {
  let component: TestComponent634Component;
  let fixture: ComponentFixture<TestComponent634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent634Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
