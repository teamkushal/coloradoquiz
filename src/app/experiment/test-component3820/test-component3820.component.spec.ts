import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3820Component } from './test-component3820.component';

describe('TestComponent3820Component', () => {
  let component: TestComponent3820Component;
  let fixture: ComponentFixture<TestComponent3820Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3820Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
