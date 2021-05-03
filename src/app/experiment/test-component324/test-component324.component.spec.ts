import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent324Component } from './test-component324.component';

describe('TestComponent324Component', () => {
  let component: TestComponent324Component;
  let fixture: ComponentFixture<TestComponent324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
