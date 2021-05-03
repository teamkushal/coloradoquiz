import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent172Component } from './test-component172.component';

describe('TestComponent172Component', () => {
  let component: TestComponent172Component;
  let fixture: ComponentFixture<TestComponent172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
