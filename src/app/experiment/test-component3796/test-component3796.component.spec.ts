import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3796Component } from './test-component3796.component';

describe('TestComponent3796Component', () => {
  let component: TestComponent3796Component;
  let fixture: ComponentFixture<TestComponent3796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3796Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
