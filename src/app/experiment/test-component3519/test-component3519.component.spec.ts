import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3519Component } from './test-component3519.component';

describe('TestComponent3519Component', () => {
  let component: TestComponent3519Component;
  let fixture: ComponentFixture<TestComponent3519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3519Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
