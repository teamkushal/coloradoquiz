import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3935Component } from './test-component3935.component';

describe('TestComponent3935Component', () => {
  let component: TestComponent3935Component;
  let fixture: ComponentFixture<TestComponent3935Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3935Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
