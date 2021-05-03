import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent531Component } from './test-component531.component';

describe('TestComponent531Component', () => {
  let component: TestComponent531Component;
  let fixture: ComponentFixture<TestComponent531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent531Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
