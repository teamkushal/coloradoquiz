import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3278Component } from './test-component3278.component';

describe('TestComponent3278Component', () => {
  let component: TestComponent3278Component;
  let fixture: ComponentFixture<TestComponent3278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
