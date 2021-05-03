import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent251Component } from './test-component251.component';

describe('TestComponent251Component', () => {
  let component: TestComponent251Component;
  let fixture: ComponentFixture<TestComponent251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
