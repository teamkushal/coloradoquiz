import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3768Component } from './test-component3768.component';

describe('TestComponent3768Component', () => {
  let component: TestComponent3768Component;
  let fixture: ComponentFixture<TestComponent3768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3768Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
