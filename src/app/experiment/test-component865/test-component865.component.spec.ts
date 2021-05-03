import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent865Component } from './test-component865.component';

describe('TestComponent865Component', () => {
  let component: TestComponent865Component;
  let fixture: ComponentFixture<TestComponent865Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent865Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
