import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3421Component } from './test-component3421.component';

describe('TestComponent3421Component', () => {
  let component: TestComponent3421Component;
  let fixture: ComponentFixture<TestComponent3421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3421Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
