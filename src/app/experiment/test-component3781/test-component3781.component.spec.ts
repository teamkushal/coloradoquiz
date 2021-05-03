import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3781Component } from './test-component3781.component';

describe('TestComponent3781Component', () => {
  let component: TestComponent3781Component;
  let fixture: ComponentFixture<TestComponent3781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3781Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
