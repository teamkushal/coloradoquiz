import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3285Component } from './test-component3285.component';

describe('TestComponent3285Component', () => {
  let component: TestComponent3285Component;
  let fixture: ComponentFixture<TestComponent3285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
