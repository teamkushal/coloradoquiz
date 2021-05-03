import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3523Component } from './test-component3523.component';

describe('TestComponent3523Component', () => {
  let component: TestComponent3523Component;
  let fixture: ComponentFixture<TestComponent3523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3523Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
