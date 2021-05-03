import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3079Component } from './test-component3079.component';

describe('TestComponent3079Component', () => {
  let component: TestComponent3079Component;
  let fixture: ComponentFixture<TestComponent3079Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3079Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
