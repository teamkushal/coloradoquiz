import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3603Component } from './test-component3603.component';

describe('TestComponent3603Component', () => {
  let component: TestComponent3603Component;
  let fixture: ComponentFixture<TestComponent3603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3603Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
