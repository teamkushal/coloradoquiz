import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3735Component } from './test-component3735.component';

describe('TestComponent3735Component', () => {
  let component: TestComponent3735Component;
  let fixture: ComponentFixture<TestComponent3735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3735Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
