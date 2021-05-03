import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3842Component } from './test-component3842.component';

describe('TestComponent3842Component', () => {
  let component: TestComponent3842Component;
  let fixture: ComponentFixture<TestComponent3842Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3842Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
