import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3706Component } from './test-component3706.component';

describe('TestComponent3706Component', () => {
  let component: TestComponent3706Component;
  let fixture: ComponentFixture<TestComponent3706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3706Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
