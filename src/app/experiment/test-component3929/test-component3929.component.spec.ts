import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3929Component } from './test-component3929.component';

describe('TestComponent3929Component', () => {
  let component: TestComponent3929Component;
  let fixture: ComponentFixture<TestComponent3929Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3929Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
