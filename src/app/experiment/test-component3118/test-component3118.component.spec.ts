import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3118Component } from './test-component3118.component';

describe('TestComponent3118Component', () => {
  let component: TestComponent3118Component;
  let fixture: ComponentFixture<TestComponent3118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
